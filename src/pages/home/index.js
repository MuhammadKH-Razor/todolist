import React from 'react';
import List from '../../components/list';
// import Swal from 'sweetalert2';
import './index.css';

class TodoListX extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                list: '',
                max: 2,
                min: 0,
                array: []
            }
    }

    addData = () => {
       if(!this.state.list.length) {
           window.alert('data kososng')
            // Swal.fire({
        //     title: 'Tidak boleh kosong',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#rgba(25, 226, 149, 0.836)',
        //     confirmButtonText: 'Lanjutkan'
        //   })
        }else if(this.state.array.length >= this.state.max) {
            window.alert('data max')
            this.setState({
                list: '',
            })
            // Swal.fire({
        //     title: 'List sudah di jumlah maksimal',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#rgba(25, 226, 149, 0.836)',
        //     confirmButtonText: 'Lanjutkan'
        //   })
        }else if(this.state.list.length && this.state.array.length <= this.state.max) {
            this.setState({
                array : [...this.state.array, this.state.list],
                list: ''
            })
        }

    }
    
    deletes = (data) => {
        let checked = this.state.array;

        let values = checked.indexOf(data)
        checked.splice(values, 1);
        this.setState({
            array: checked
        })

    }

    valueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    modeon = () => {
        document.getElementById('modeOn').classList.toggle('on');
        document.getElementById('form').classList.toggle('on-form');
        document.getElementById('title').classList.toggle('title-mode');
    }

    render() {
        const {addData, valueChange, deletes, modeon} = this;
        const {array, list, max, min} = this.state;

        return (
            <div>
                <div className="form" id="form">
                    <div className="form1">
                        <h2 className="title" id="title">Todolist app</h2>
                        <input type="text" className="textInput" id="textInput" name="list" value={list} onChange={valueChange} />
                        <button className="btn-add" onClick={addData}>Tambah</button>
                        <div className="mode">
                            <div className="btn-mode" id="modeOn" onClick={modeon}></div>
                        </div>
                    </div>
                </div>
                <div className="form2">
                    <List items={array} delete={(data) => deletes(data)}/>
                </div>
                <div className="setting">
                    <div className="sett-wrap">
                        <div className="sett">
                            <span>Min-list</span>
                            <input type="number" className="textSett" name="min" value={min} onChange={valueChange} />
                        </div>
                        <div className="sett">
                            <span>Max-list</span>
                            <input type="number" className="textSett" name="max" value={max} onChange={valueChange} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoListX;