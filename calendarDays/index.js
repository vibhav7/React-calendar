import React from 'react'
import './index.css'

export default class CalendarDays extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            i: [0, 1, 2, 3, 4, 5, 6],
            j: [0, 7, 14, 21, 28, 35],
            k: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],

        }
    }
    render() {
        return (
            <div>
                <h3>click above to show Calendar of month = {this.props.monthName[this.props.month - 1]} And year = {this.props.year} => </h3>
                <div className='date-table'>
                    {this.state.k.map((value, index) => {
                        return (
                            <div key={index + 'j'} className='date-table-cell-weeks'>
                                {value}
                            </div>
                        )
                    })}
                    {this.state.j.map((jvalue, j) => {
                        return (
                            <div key={j + 'r'} className='date-table-row'>
                                {this.state.i.map((ivalue, i) => {
                                    return (
                                        <div key={i+'c'} className='date-table-cell'>
                                            {this.props.monthDate[i+jvalue]}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}

                </div>

            </div>
        )
    }
}
