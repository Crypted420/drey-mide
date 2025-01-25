import { uid } from 'uid';

const generateApiKey = () => {
    return uid(32);
}

console.log(generateApiKey());