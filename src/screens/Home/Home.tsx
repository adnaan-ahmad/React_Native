import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation() as any;
  const data = [
    { id: '1', title: 'Accessibility' },
    { id: '2', title: 'Animations' },
    { id: '3', title: 'Redux' },
    { id: '4', title: 'Jest' },
    { id: '5', title: 'Native Modules' },
    { id: '6', title: 'Performance' }
  ];
  

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={{
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#eee',
        borderRadius: 8,
      }}
      onPress={() => navigation.navigate(item.title)}
    >
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}