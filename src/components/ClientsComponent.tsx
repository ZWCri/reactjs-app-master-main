import { ActionIcon, Badge, Container, Table, Title, Image, Group } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IconSettings } from '@tabler/icons-react';

function ClientsComponent() {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        axios.get("http://localhost/phpapi/member.php")
        .then((response) => {
            setClients(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    console.log(clients);
    const rows = clients.map((element) => (
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.fullname}</td>
            <td>{element.email}</td>
            <td>{element.age}</td>
            <td><Image withPlaceholder maw={120} mx="auto" radius="md" src={element.picture} /></td>
            <td>{element.timest}</td>
            <td>
                <Group>
                    <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon>
                    <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon>
                    <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon>
                </Group>
            </td>
        </tr>
    ))
  return (
    <Container ta="center">
            <Title>
                <Badge variant="filled" size="lg">
                    Menber List
                </Badge>
            </Title>
            <Table>
                <thead>
                    <tr >
                        <td>ID</td>
                        <td>FullName</td>
                        <td>Email</td>
                        <td>Age</td>
                        <td>Picture</td>
                        <td>Time</td>
                        <td>Option</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
    </Container>
  )
}

export default ClientsComponent