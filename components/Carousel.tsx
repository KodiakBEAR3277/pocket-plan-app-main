import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

interface Expense {
  category: string;
  amount: number;
  color: string;
}

interface RecordItem {
  icon: string;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
}

interface Goal {
  title: string;
  current: string;
  target: string;
}

interface CarouselItem {
  title: string;
  subtitle: string;
  type: 'chart' | 'list' | 'goal';
  amount?: string;
  expenses?: Expense[];
  content?: RecordItem[];
  goal?: Goal;
}

const CarouselContent: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<ScrollView | null>(null);

  const carouselData: CarouselItem[] = [
    {
      title: 'Expenses structure',
      subtitle: 'LAST 30 DAYS',
      amount: '₱98',
      type: 'chart',
      expenses: [
        { category: 'Food', amount: 28, color: '#FF6B6B' },
        { category: 'Transportation', amount: 70, color: '#4ECDC4' },
      ],
    },
    {
      title: 'Records overview',
      subtitle: 'LAST 30 DAYS',
      content: [
        { icon: '🍽️', title: 'Food', subtitle: 'Cash', amount: '-₱28', date: 'Today' },
        { icon: '🚗', title: 'Transportation', subtitle: 'Cash', amount: '-₱70', date: 'Today' },
        { icon: '💰', title: 'Allowance', subtitle: 'Cash', amount: '+₱500', date: 'Today' },
      ],
      type: 'list',
    },
    {
      title: 'Goals',
      subtitle: 'How much have I already saved?',
      goal: { title: 'New Phone', current: '₱5,000', target: '₱40,000' },
      type: 'goal',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselData.length;
      slideRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 1500);
    return () => clearInterval(timer);
  }, [currentIndex]);

const renderExpensesChart = (expenses: Expense[]) => {
  const total = expenses.reduce((sum: number, expense: Expense) => sum + expense.amount, 0);
  
  return (
    <View style={styles.whiteContainer}>
      <View style={styles.chartContainer}>
        <View style={styles.simpleChartContainer}>
          {expenses.map((expense: Expense, index: number) => (
            <View 
              key={`expense-${index}`} 
              style={[
                styles.expenseBar, 
                { 
                  backgroundColor: expense.color,
                  flex: expense.amount / total
                }
              ]} 
            />
          ))}
        </View>
        <View style={styles.totalAmount}>
          <Text style={styles.totalAmountText}>₱{total}</Text>
        </View>
        <View style={styles.legendContainer}>
          {expenses.map((expense: Expense, index: number) => (
            <View key={`legend-${index}`} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: expense.color }]} />
              <Text style={styles.legendText}>
                {expense.category} (₱{expense.amount})
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const renderItem = (item: CarouselItem, index: number) => {
  switch (item.type) {
    case 'chart':
      return (
        <View style={styles.slide} key={index}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          {item.expenses && renderExpensesChart(item.expenses)}
        </View>
      );
    case 'list':
      return (
        <View style={styles.slide} key={index}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <View style={styles.whiteContainer}>
            {item.content?.map((record: RecordItem, idx: number) => (
              <View style={styles.recordItem} key={idx}>
                <View style={styles.recordLeft}>
                  <View style={styles.iconContainer}>
                    <Text>{record.icon}</Text>
                  </View>
                  <View>
                    <Text style={styles.recordTitle}>{record.title}</Text>
                    <Text style={styles.recordSubtitle}>{record.subtitle}</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.amount, { color: record.amount?.includes('+') ? '#4CAF50' : '#FF0000' }]}>
                    {record.amount}
                  </Text>
                  <Text style={styles.date}>{record.date}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      );
    case 'goal':
      return (
        <View style={styles.slide} key={index}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <View style={styles.whiteContainer}>
            {item.goal && (
              <View style={styles.goalContainer}>
                <View style={styles.goalHeader}>
                  <Text style={styles.goalTitle}>{item.goal.title}</Text>
                  <TouchableOpacity>
                    <Text style={styles.editIcon}>✏️</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: '12.5%' }]} />
                  </View>
                  <View style={styles.goalAmounts}>
                    <Text style={styles.currentAmount}>{item.goal.current}</Text>
                    <Text style={styles.targetAmount}>{item.goal.target}</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      );
    default:
      return null;
  }
};

return (
  <View style={styles.container}>
    <Animated.ScrollView
      ref={slideRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      scrollEventThrottle={16}
      contentContainerStyle={{ paddingVertical: 8 }}
    >
      {carouselData.map((item, index) => renderItem(item, index))}
    </Animated.ScrollView>
    <View style={styles.pagination}>
      {carouselData.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 20, 6],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return <Animated.View key={index} style={[styles.dot, { width: dotWidth, opacity }]} />;
      })}
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: 8,
  justifyContent: 'center',
  alignItems: 'center',
},
slide: {
  width: width - 32,
  marginHorizontal: 16,
  backgroundColor: '#EBEBEB',
  borderRadius: 16,
  padding: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},
whiteContainer: {
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  padding: 16,
  marginTop: 8,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 2,
},  
simpleChartContainer: {
  flexDirection: 'row',
  height: 32,
  borderRadius: 16,
  overflow: 'hidden',
  marginTop: 8,
  marginBottom: 24,
},
  expenseBar: {
    height: '100%',
  },
  chartContainer: {
    marginTop: 0,  // Adjusted since we now have padding from whiteContainer
  },
  totalAmount: {
    alignItems: 'center',
    marginVertical: 16,
  },
  totalAmountText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
    marginBottom: 8,
  },
  legendColor: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  recordLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  recordSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'right',
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: '#666',
    textAlign: 'right',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 8,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
    marginHorizontal: 4,
  },
  goalContainer: {
    marginTop: 0,  // Adjusted since we now have padding from whiteContainer
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  editIcon: {
    fontSize: 16,
  },
  progressContainer: {
    width: '100%',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    marginBottom: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  goalAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentAmount: {
    fontSize: 14,
    color: '#666',
  },
  targetAmount: {
    fontSize: 14,
    color: '#666',
  },
});

export default CarouselContent;
