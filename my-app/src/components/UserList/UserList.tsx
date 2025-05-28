import { useState, useEffect } from 'react'

type User = {
    id: number
    name: string
    email: string
};

function UserList() {
    const [users, setUsers] = useState<User[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                if (!res.ok) throw new Error("Ошибка загрузки!")
                return res.json()
            })
            .then((data: User[]) => {
                setUsers(data)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка: {error}</p>
    if (!users) return <p>Нет данных</p>

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} and {user.email}
                </li>
            ))}
        </ul>
    )
};

export default UserList;