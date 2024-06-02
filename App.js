import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const categories = [
  { id: '1', title: 'Exercise' },
  { id: '2', title: 'Study' },
  { id: '3', title: 'Code' },
  { id: '4', title: 'Cook' },
  { id: '5', title: 'Read' },
  { id: '6', title: 'Travel' },
  { id: '7', title: 'Meditate' },
  { id: '8', title: 'Shop' },
];

const tasks = [
  { id: '1', title: 'Morning Run', category: 'Exercise' },
  { id: '2', title: 'Math Homework', category: 'Study' },
  { id: '3', title: 'Build React App', category: 'Code' },
  { id: '4', title: 'Prepare Dinner', category: 'Cook' },
  { id: '5', title: 'Read a Book', category: 'Read' },
  { id: '6', title: 'Plan Trip', category: 'Travel' },
  { id: '7', title: 'Evening Meditation', category: 'Meditate' },
  { id: '8', title: 'Grocery Shopping', category: 'Shop' },
  { id: '9', title: 'Gym Workout', category: 'Exercise' },
  { id: '10', title: 'Science Project', category: 'Study' },
  { id: '11', title: 'Debug Code', category: 'Code' },
  { id: '12', title: 'Bake Cake', category: 'Cook' },
  { id: '13', title: 'Magazine Reading', category: 'Read' },
  { id: '14', title: 'Book Tickets', category: 'Travel' },
  { id: '15', title: 'Yoga Session', category: 'Meditate' },
];

const Category = ({ title }) => (
  <View style={styles.categoryContainer}>
    <Text style={styles.categoryText}>{title}</Text>
  </View>
);

const Task = ({ title, category }) => (
  <View style={styles.taskContainer}>
    <Text style={styles.taskTitle}>{title}</Text>
    <Text style={styles.taskCategory}>{category}</Text>
  </View>
);

const TaskList = () => (
  <FlatList
    data={tasks}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Task title={item.title} category={item.category} />}
  />
);

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>
      <TextInput style={styles.input} placeholder="Search tasks..." />
      <Text style={styles.subHeader}>Categories</Text>
      <ScrollView horizontal style={styles.categoriesContainer}>
        {categories.map((category) => (
          <Category key={category.id} title={category.title} />
        ))}
      </ScrollView>
      <Text style={styles.subHeader}>Ongoing Tasks</Text>
      <TaskList />
      <Button title="Add Task" onPress={() => alert('Task Added')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryContainer: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 16,
  },
  taskContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskCategory: {
    fontSize: 14,
    color: '#888',
  },
});

export default App;

UI DESIGN CODE
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fnk9YKIdz4RFypdwF9mtQTm%2FDCIT-202---Assignment-3%3Fnode-id%3D1-5%26t%3DVm1km63dQPjikc6O-1" allowfullscreen></iframe>
