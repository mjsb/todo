import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert, Image } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task';

export function Home() {
    const [focus, setFocus] = useState(false);
    const [created, setCreated] = useState(0);  
    const [done, setDone] = useState<string[]>([]);  
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskDescription, setTaskDescription] = useState('');

    function handleTaskAdd() {
        if (tasks.includes(taskDescription)) {
            return Alert.alert('Atenção!', `${taskDescription} já foi cadastrado!`)
        }

        if (taskDescription === '') {
            return Alert.alert('Atenção!', 'Informe uma descrição para a tarefa!')
        }

        setTasks(prevState => [...prevState, taskDescription]);
        setTaskDescription('');
        setCreated(tasks.length + 1)
    }
    
    function handleTaskRemove(description: string) {
        Alert.alert('Remover', `Remover a tarefa ${description}?`, [
            {
                text: 'Sim',
                onPress: () => { 
                    setTasks(prevState => prevState.filter(Task => Task !== description)); 
                    setCreated(tasks.length - 1); 
                    if (done.includes(description)) {
                        setDone(prevState => prevState.filter(Task => Task !== description));
                    };
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);        
    }

    function handleTaskDone(doneDescription: string) {

        if (done.includes(doneDescription)) {
            setDone(prevState => prevState.filter(Task => Task !== doneDescription));
        } else {
            setDone(prevState => [...prevState, doneDescription]);
        }

    }

    return (
        <>        
            <View style={styles.header}>
                <View style={styles.boxlogo}>
                    <Image 
                        style={styles.logorocket}
                        source={require('../../../assets/rocket.png')}
                    />
                    <Image 
                        source={require('../../../assets/to.png')}
                    />
                    <Image 
                        source={require('../../../assets/do.png')}
                    />
                </View>
            </View>

            <View style={styles.form}>
                <TextInput 
                    style={focus ? styles.inputFocus : styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setTaskDescription}
                    value={taskDescription}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Image 
                        source={require('../../../assets/plus.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>   

                <View style={styles.boxInfo}>
                    <View style={styles.boxContentInfo}>
                        <Text style={styles.created}>Criadas</Text>
                        <Text style={styles.infoVal}>{created}</Text>
                    </View>
                    <View style={styles.boxContentInfo}>
                        <Text style={styles.done}>Concluídas</Text>
                        <Text style={styles.infoVal}>{done.length}</Text>
                    </View>
                </View>

                <FlatList 
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Task 
                            key={item}
                            description={item}
                            onRemove={ () => handleTaskRemove(item) }
                            onDone={ () => handleTaskDone(item) }
                            done={done.includes(item) ? true : false}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.boxTasks}>
                            <Image 
                                style={styles.clipboard}
                                source={require('../../../assets/clipboard.png')}
                            />
                            <Text style={styles.listEmptyTextBold}>
                                Você ainda não tem tarefas cadastradas
                            </Text>                    
                            <Text style={styles.listEmptyTextNormal}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>                    
                        </View>
                    )}
                />            
            </View>
        </>
    )
}