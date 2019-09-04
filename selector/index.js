import React from 'react'
import './index.css'
import CalendarDays from '../calendarDays';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            year: 2019,
            month: 8,
            startDateNumber: '',
            totalDays: 0,
            whiteSpaceFirst: 0,
            whiteSpaceBack: 0,
            date:[],
            monthName:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
        
    }
    setYearPrev() {
        this.setState({
            year: this.state.year - 1
        })
    }

    setYearNext() {
        this.setState({
            year: this.state.year + 1
        })
    }

    setMonthPrev() {
        if (this.state.month > 1 && this.state.month <= 12)
            this.setState({
                month: this.state.month - 1
            })
            else if(this.state.month=='1'){
                this.setYearPrev()
                this.setState({
                    month: 12
                })
            }
    }

    setMonthNext() {
        if (this.state.month >= 1 && this.state.month < 12) {
            this.setState({
                month: this.state.month + 1
            })
        }
        else if(this.state.month=='12'){
            this.setYearNext()
            this.setState({
                month: 1
            })
        }
    }

    myFunction() {
        var month = this.state.month
        var year = this.state.year
        var numOfDays = new Date(year, month, 0).getDate();
        var firstDay = new Date(year, month - 1, 1).getDay();
        var whiteSpaceFront = firstDay;
        var whiteSpaceLast = 42 - numOfDays - whiteSpaceFront;
        var arr = [];
        var z = 1;
        for (var j = 0; j < 42; j++) {
            arr[j] = '';
        }
        for (let i = firstDay; i <= numOfDays + firstDay - 1; i++){
            arr[i] =z;
            z++;
        }
        this.setState({
            date: arr
        })

            this.setState({
                totalDays: numOfDays,
                startDateNumber: firstDay,
                whiteSpaceFirst: whiteSpaceFront,
                whiteSpaceBack: whiteSpaceLast
            })
    }
    render() {
        return (
            <div>
                <div className='year-table'>
                    <div className='year-table-cell'>
                        <h5>Set the Year</h5>
                    </div>
                    <div className='year-table-cell'>
                        <button onClick={this.setYearPrev.bind(this)}>Prev is {this.state.year -1}</button>
                    </div>
                    <div className='year-table-cell'>
                        <h3>{this.state.year}</h3>
                    </div>
                    <div className='year-table-cell'>
                        <button onClick={this.setYearNext.bind(this)}>Next is {this.state.year + 1}</button>
                    </div>
                </div>
                <div className='month-table'>
                    <div className='month-table-cell'>
                        <h5>Set the Month</h5>
                    </div>
                    <div className='month-table-cell'>
                        <button onClick={this.setMonthPrev.bind(this)}>Prev is {this.state.monthName[this.state.month-2]}</button>
                    </div>
                    <div className='month-table-cell'>
                        <h3>{this.state.monthName[this.state.month-1]}</h3>
                    </div>
                    <div className='month-table-cell'>
                        <button onClick={this.setMonthNext.bind(this)}>Next is {this.state.monthName[this.state.month]}</button>
                    </div>
                </div>
                <button onClick={this.myFunction.bind(this)}>Click to show Calendar</button>
                <div style={{
                    width: '100%',
                    height: '50px'
                }}>

                </div>
                <CalendarDays monthDate={this.state.date}
                year = {this.state.year}
                month ={this.state.month}
                monthName = {this.state.monthName}
                />
            </div>
        )
    }
}
