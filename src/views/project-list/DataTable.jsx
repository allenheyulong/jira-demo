import React from "react"
export const DataTable = ({ lists, users }) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                lists.map((list) => {
                    return <tr key={list.id}>
                        <td>{list.name}</td>
                        <td>{users.find(({ id }) => id === list.personId)?.name || '未知'}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}