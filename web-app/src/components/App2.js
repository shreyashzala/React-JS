import React from 'react';
import { blog } from './BlogList';
import './css/App2.css';


export default function App2() {


    function card(val) {
        const id = `#${val.target}`;
        const modal = `${val.target}Label`;

        return (

            <div className='list' key={val.id}>
                <div className='card'>
                    <h4 className='card-header'> {val.title}</h4>

                    <div className='card-body'>
                        <p>{val.details}</p>
                        <button className='btn btn-danger mt-2' data-toggle="modal"
                            data-target={id} >Read More</button>
                    </div>
                    
                </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id={val.target} tabIndex="-1" role="dialog" aria-labelledby={modal} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={modal}>{val.title}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {val.dis}
                            </div>
                            <div class="modal-footer">
                                <strong>-{val.auther}</strong>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Modal */}
            </div>
        )
    }


    return (
        <>
            <h1>Blogs</h1>

            <div className='heading'>
                {blog.map(card)}
            </div>


        </>
    )
}


