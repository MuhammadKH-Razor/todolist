import React from 'react';

class List extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((item, index) => {
                            return (
                                    <li key={index}>
                                        {index + 1}. {item} - <button className="hapus" onClick={(data) => this.props.delete(item)}>hapus</button>
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List;