import { useState, useEffect } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function SignIn(props){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
    function handleSignIn(){
        console.log(name, password)
    }

    const { colors } = useTheme()

    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Bem-vindo {name}
            </Heading>
            <Input 
                placeholder="E-mail" 
                mb={4} 
                InputLeftElement={
                    <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
                }
                onChangeText={text => setName(text)} 
                />
            <Input 
                placeholder="Password" 
                mb={8
                } 
                InputLeftElement={
                    <Icon as={<Key color={colors.gray[300]} />} ml={4} />
                }
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button title='Entrar' w="full" onPress={handleSignIn}/>
        </VStack>
    )
}