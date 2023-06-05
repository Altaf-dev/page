import React from 'react';

function ListComponent () {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://portfolio-7c2f7-default-rtdb.firebaseio.com/data.json');
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData)
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Данные из JSON:</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}
                        <img src={item.src}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListComponent;
