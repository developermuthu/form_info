import { Component } from 'react'
import Select from "react-select"
import logo from "../component/images/logo.png"
import AppointmentInfoForm from "./AppointmentInfoForm.json"




interface stateInterface {

    modal: boolean
    applicationData: any
    applicationField: any
    finalValidation: boolean
}
class AppointmentInfo extends Component<{}, stateInterface> {
    constructor(props: {}) {

        super(props)

        this.state = {
            applicationField: [],
            modal: false,
            applicationData: {},
            finalValidation: false
        }
    }

    componentDidMount() {

        this.setState({

            applicationField: AppointmentInfoForm
        })
    }

    modalOpen = () => {

        const { modal } = this.state;
    }

    handleSubmit = (e: any) => {

        e.preventDefault()

        let _appicantData = { ...this.state.applicationData }

        let _appicantField = [...this.state.applicationField]

        let finalValidation = true

        _appicantField.forEach((item: any, index: number) => {

            if (item.name === "contact_name" || item.name === "phone_number" || item.name === "service_location") {

                if (!_appicantData[item.name]) {

                    item.errorMessage = `Please Enter the ${item.name}`

                    finalValidation = false
                }

            }
        })

        if (finalValidation) {

            this.setState({ finalValidation: true })
            window.alert(JSON.stringify(_appicantData))



        } else {

            this.setState({ applicationField: _appicantField })
        }





    }

    handleChange = (value: string, name: string) => {

        let tempStateValue = { ...this.state.applicationData }

        tempStateValue[name] = value

        let _appicantField = [...this.state.applicationField]

        _appicantField.forEach((item: any, index: number) => {

            if (item.name === "contact_name" || item.name === "phone_number" || item.name === "service_location") {

                if (tempStateValue[item.name]) {

                    item.errorMessage = ""


                }

            }
        })

        this.setState({
            applicationData: tempStateValue
        })
    }
    render() {

        const { applicationData, applicationField, finalValidation } = this.state

        return (
            <>
                <div id="page">
                    <header className="py-3  border-bottom shadow bg-info container-fluid">
                        <div
                            className="container-fluid "
                            style={{ gridTemplateColumns: "1fr 2fr" }}
                        >
                            <h2>
                                <img src={logo} alt='img' width={"120px"} height={"30px"} />
                                <span style={{ position: "absolute", right: "10px" }}>Form Info</span>
                            </h2>
                        </div>
                    </header>
                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            <div className="col py-3">


                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Click to view 
                                </button>
                                <div className="modal fade show" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">

                                                {
                                                    applicationField.map((item: any, index: number) => {

                                                        return <>

                                                            <div className={item.className}>
                                                                {
                                                                    item.type !== "header" ?
                                                                        <div className="row">
                                                                            <div className="col-md-12 col-sm-12">
                                                                                <label className='form-label m-0' htmlFor='passportPhoto' style={{ textTransform: "capitalize" }}>
                                                                                    {
                                                                                        item.label.replace(/_/g, " ")
                                                                                    }
                                                                                    {/* <small className='text-danger'>*</small> */}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        <>
                                                                            <div>

                                                                                <h4 className='mb-3 mt-3' style={{ textAlign: "center", fontWeight: "bold" }}> {item.label}</h4>

                                                                            </div>
                                                                        </>
                                                                }



                                                                {item.type === "text" ?
                                                                    <div key={index}>
                                                                        <input
                                                                            type={item.type}
                                                                            placeholder={item.title}
                                                                            className='form-control'
                                                                            name={item.name}
                                                                            value={applicationData[item.name]}
                                                                            onChange={(e) => this.handleChange(e.target.value, item.name)}

                                                                        />
                                                                        <span className="form-label" style={{ color: "red", textTransform: "capitalize" }}>
                                                                            {item.errorMessage ? item.errorMessage.replace(/_/g, " ") : ""}
                                                                        </span>
                                                                    </div>
                                                                    : item.type === "date" ?
                                                                        <div key={index}>
                                                                            <input
                                                                                type={item.type}
                                                                                placeholder={item.title}
                                                                                className='form-control'
                                                                                name={item.name}
                                                                                onChange={(e) => this.handleChange(e.target.value, item.name)}
                                                                                value={applicationData[item.name]}

                                                                            />
                                                                            <span className="form-label" style={{ color: "red", textTransform: "capitalize" }}>
                                                                                {item.errorMessage ? item.errorMessage.replace(/_/g, " ") : ""}
                                                                            </span>
                                                                        </div>
                                                                        :
                                                                        item.type === "select" ?


                                                                            <div key={index}>



                                                                                <Select
                                                                                    options={item.options}
                                                                                    name={item.name}
                                                                                    value={
                                                                                        applicationData[item.name] && item.options.filter((key: any) => key.value === applicationData[item.name])
                                                                                    }


                                                                                    onChange={(value) => this.handleChange(value.value, item.name)}
                                                                                />

                                                                                <span className="form-label" style={{ color: "red", textTransform: "capitalize" }}>
                                                                                    {item.errorMessage ? item.errorMessage.replace(/_/g, " ") : ""}
                                                                                </span>
                                                                            </div>

                                                                            : item.type === "textarea" ?

                                                                                <textarea
                                                                                    className='form-control'
                                                                                    name={item.name}
                                                                                    onChange={(e) => this.handleChange(e.target.value, item.name)}
                                                                                    value={applicationData[item.name]}
                                                                                />

                                                                                : item.type === "number" ?
                                                                                    <>
                                                                                        <input
                                                                                            className='form-control'
                                                                                            name={item.name}
                                                                                            type="number"
                                                                                            onChange={(e) => this.handleChange(e.target.value, item.name)}
                                                                                            value={applicationData[item.name]}
                                                                                        />

                                                                                        <span className="form-label" style={{ color: "red", textTransform: "capitalize" }}>
                                                                                            {item.errorMessage ? item.errorMessage.replace(/_/g, " ") : ""}
                                                                                        </span>
                                                                                    </>



                                                                                    : item.type === "datetime" ?

                                                                                        <input
                                                                                            className='form-control'
                                                                                            name={item.name}
                                                                                            type="date "
                                                                                            onChange={(e) => this.handleChange(e.target.value, item.name)}
                                                                                            value={applicationData[item.name]}
                                                                                        />

                                                                                        : ""}
                                                            </div>
                                                        </>

                                                    })
                                                }

                                            </div>
                                            <div className="modal-footer">

                                                <div>

                                                    <input type="checkbox" style={{ marginRight: 4 }}>

                                                    </input>
                                                    <label>Create Another</label>
                                                </div>
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                {finalValidation ? <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e: any) => this.handleSubmit(e)}>Save changes</button> :
                                                    <button type="button" className="btn btn-primary" onClick={(e: any) => this.handleSubmit(e)}>Save changes</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default AppointmentInfo
