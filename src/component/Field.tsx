import React from 'react'
import { useEffect } from 'react';


interface propsInterface {

    balanceValue: number;
    storageValue: number;
    error: boolean;
    storageValueError: boolean;
    handleChange: (e: any) => void;
    balanceAdd: () => void;
    balanceRemove: (event: any) => void;
}

// class Field extends React.Component<propsInterface, {}>{

//     private references: any
//     constructor(props: propsInterface) {

//         super(props)

//         this.references = Array(7).fill(0).map(() => React.createRef());

//     }

//     componentDidUpdate(prevProps: any, prevState: any) {

//         const { error } = this.props


//         if (error === true) {

//             this.references["value"].current.focus()

//         }

//     }

//     getOrCreateRef = (id: any) => {

//         if (!this.references.hasOwnProperty(id)) {

//             this.references[id] = React.createRef();
//         }

//         return this.references[id];
//     }


//     render() {

//         return <>
//             <div>
//                 <form>

//                     <div className='row justify-content-center'>
//                         <div className='col-6'>
//                             <input
//                                 className="form-control"
//                                 type="number"
//                                 name="value"
//                                 id="value"
//                                 // value={this.props.balanceValue === 0 ? "" : this.props.balanceValue}
//                                 placeholder='Enter the value'
//                                 ref={this.getOrCreateRef("value")}
//                                 onChange={(e) => this.props.handleChange(e)}
//                             />
//                             {this.props.error &&
//                                 <div className="alert alert-danger  mt-3" role="alert">
//                                     Please enter the value
//                                 </div>
//                             }
//                         </div>
//                     </div>

//                     <div className="d-flex justify-content-center mt-3">
//                         <button type="button" className="btn btn-primary mx-3" onClick={() => this.props.balanceAdd()}>Add</button>
//                         <button type="button" className="btn btn-primary mx-3" onClick={(event) => this.props.balanceRemove(event)}>Remove</button>
//                     </div>

//                 </form >

//             </div >

//         </>
//     }
// }

const Field = (props: propsInterface) => {

    const references: any = Array(7).fill(0).map(() => React.createRef());

    useEffect(() => {

        if (props.error || props.storageValueError) {

            references["value"].current.focus()

        }


    })

    const getOrCreateRef = (id: any) => {

        if (!references.hasOwnProperty(id)) {

            references[id] = React.createRef();
        }

        return references[id];
    }

    return (
        <div>
            <form>

                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <input
                            className="form-control"
                            type="number"
                            name="value"
                            id="value"
                            // value={this.props.balanceValue === 0 ? "" : this.props.balanceValue}
                            placeholder='Enter the value'
                            min="1"
                            ref={getOrCreateRef("value")}
                            onChange={(e) => props.handleChange(e)}
                        />
                        {props.error &&
                            <div className="alert alert-danger  mt-3" role="alert">
                                Please enter the value
                            </div>
                        }
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-primary mx-3" onClick={() => props.balanceAdd()}>Add</button>
                    <button type="button" className="btn btn-primary mx-3" onClick={(event) => props.balanceRemove(event)}>Remove</button>
                </div>

            </form >

        </div >
    )

}

export default Field;