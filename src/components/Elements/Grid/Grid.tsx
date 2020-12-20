import React from 'react';
import './Grid.scss';

interface GridProps {
    data: Array<Object>
    headers: Array<String>
}

function Grid(props: GridProps) {
    const { data, headers } = props;
    return (
        <table className="grid">
            { headers &&
                <thead>
                    <tr>
                        {
                            headers.map(header => {
                                return (<th>{header.replace('_', ' ')}</th>);
                            })
                        }
                    </tr>
                </thead>
            }
            {
                data &&
                <tbody>
                    {
                        data.map(row => {
                            return (<tr>
                                {
                                    headers.map(header => {
                                        return (<td>{row[header.toString()]} </td>);
                                    })
                                }
                            </tr>
                            );
                        })
                    }
                </tbody>
            }
        </table>
    );
}

export default Grid;
