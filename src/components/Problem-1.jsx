import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [allData, setAllData] = useState([]);

    const handleAddData = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const status = form.status.value;
        const newData = {name, status};
        setAllData(oldArray => [...oldArray, newData] );
        form.reset();
    }

    const handleClick = (val) =>{
        setShow(val);
    }

    const getDataSet = () => {
        let dataSet = []
        if (show == 'active'){
            console.log('active button clicked');
            dataSet = allData.filter(singleData => singleData.status == 'active')
        }
        else if (show == 'completed'){
            console.log('completed button clicked');
            dataSet = allData.filter(singleData => singleData.status == 'completed')
        }
        else{
            console.log('all button is clicked');
            dataSet = allData;
            dataSet.sort((a, b) => {
                const statusA = a.status.toUpperCase(); // ignore upper and lowercase
                const statusB = b.status.toUpperCase(); // ignore upper and lowercase
                if (statusA < statusB) {
                    return -1;
                }
                if (statusA > statusB) {
                    return 1;
                }
                return 0;
            });
        }
        return dataSet;
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleAddData} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name="name" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" name="status" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                getDataSet()?.map((singleData, index) => <tr key={index}>
                                    <td>{singleData.name}</td>
                                    <td>{singleData.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;