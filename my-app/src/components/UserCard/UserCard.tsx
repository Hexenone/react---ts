import { useState } from 'react'

export type User = {
    id: number;
    name: string;
    email: string;
};

type UserListProps = {
    users: User[];
};

function UserCard({ users }: UserListProps) {
    const [dataUsers, setDataUsers] = useState<User[] | null>(users);

    if (!dataUsers) return <p>Нет данных</p>

    return (
        <ul>
            {dataUsers.map(user => (
                <li key={user.id}>
                    {user.name} and {user.email}
                </li>
            ))}
        </ul>
    )
};

export default UserCard;