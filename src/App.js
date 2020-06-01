import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [{
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '유정수',
    'birthday': '960205',
    'gender': '남',
    'job': '대학생',
},
    {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '하하하',
    'birthday': '960205',
    'gender': '남',
    'job': '대학생',
},
    {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '뿌뿌뿌',
    'birthday': '960205',
    'gender': '남',
    'job': '대학생',
}
]

class App extends Component {
    render() {
        return (
            <dic>
                {
                    customers.map(c => {
                        return(
                            <Customer
                                key={c.id}
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                birthday={c.birthday}
                                gender={c.gender}
                                job={c.job}/>
                        )
                    })
                }
            </dic>
        );
    };
}

export default App;
