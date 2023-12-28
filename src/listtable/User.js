import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./User.scss";
import { IoFilterOutline } from "react-icons/io5";

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listuser: [
        {
          id: 1,
          names: "Nguyen Huu Thang",
          represent: "Công ty TNHH A",
          account: "Thang123xyz",
          phone: "0976525888",
          date: "29/10/2022",
          status: "Hoạt động",
          isChecked: false
        },
        {
          id: 2,
          names: "Nguyen Van Thai",
          represent: "Công ty TNHH B",
          account: "Thai456JQK",
          phone: "0976525999",
          date: "29/10/2022",
          status: "Hoạt động",
          isChecked: false
        },
        {
          id: 3,
          names: "Vu Thu H",
          represent: "Công ty cổ phần ABC23",
          account: "ha625th",
          phone: "0976525999",
          date: "29/17/2022",
          status: "Tạm ngưng",
          isChecked: false
        },
        {
          id: 4,
          names: "Trinh Tuan Tu",
          represent: "Công ty TNHH B",
          account: "Thai456JQK",
          phone: "0976525955",
          date: "29/01/2022",
          status: "Tạm ngưng",
          isChecked: false
        },
        {
          id: 5,
          names: "Tong Viet Phu",
          represent: "Công ty 123hag",
          account: "Phucxo99",
          phone: "0976525977",
          date: "29/10/2022",
          status: "Hoạt động",
          isChecked: false
        },
        {
          id: 6,
          names: "Mao Trach Da",
          represent: "Công ty Việt H",
          account: "davao231",
          phone: "0376525222",
          date: "12/07/2022",
          status: "Hoạt động",
          isChecked: false
        },
        {
          id: 7,
          names: "Le Thi Nhung",
          represent: "Công ty Việt Hung2",
          account: "nhungdao2j",
          phone: "0376525222",
          date: "22/12/2022",
          status: "Tạm ngưng",
          isChecked: false
        },
        {
          id: 8,
          names: "Bui Viet Anh",
          represent: "Công ty Việt H",
          account: "anhanh98",
          phone: "0676525888",
          date: "12/07/2022",
          status: "Hoạt động",
          isChecked: false
        },
        {
          id: 9,
          names: "Cam Tu Cau",
          represent: "Công ty giải trí HHH",
          account: "cauhd231",
          phone: "0376525222",
          date: "11/02/2022",
          status: "Hoạt động",
          isChecked: false
        },
        {
          id: 10,
          names: "Mao Trach Da",
          represent: "Công ty Việt H",
          account: "davao231",
          phone: "0376525222",
          date: "12/07/2022",
          status: "Hoạt động",
          isChecked: false
        },
        {
          id: 11,
          names: "Mai An Viet",
          represent: "Công ty Việt Hoa",
          account: "bviet666",
          phone: "0376528652",
          date: "12/08/2022",
          status: "Hoạt động",
          isChecked: false
        },
        {
          id: 12,
          names: "Kim Ba Ba",
          represent: "Công ty Việt H",
          account: "davao231",
          phone: "0376525222",
          date: "09/11/2022",
          status: "Tạm ngưng",
          isChecked: false
        },
      ]
    };
  }

  handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      listuser: prevState.listuser.map((index) =>
        index.id === id ? { ...index, isChecked: !index.isChecked } : index
      ),
    }));
  };

  toggleStatus = (status) => {
    const { listuser } = this.state;
    listuser.forEach((index) => {
      if (index.isChecked) {
        index.status = status;
      }
    });

    this.setState({ listuser: [...listuser] });

  }

  toggleStatus2 = (status) => {
    const { listuser } = this.state;
    alert("Bạn có muốn tiếp tục không ?");
    listuser.forEach((index) => {
      if (index.isChecked) {
        index.status = status;
      }
    });

    this.setState({ listuser: [...listuser] });

  }
  

  render() {
    //   let elements = this.state.listuser.map((listuser, index) => {
    //     let results = "";
    //     if(listuser){
    //       results =
    //       <tr key={index.id}>
    //         <td>
    //         <input type="checkbox" className="row-checkbox" checked={index.isChecked} onChange={() => this.handleCheckboxChange(index.id)} />
    //         </td>
    //         <td>{listuser.names}</td>
    //         <td>{listuser.represent}</td>
    //         <td>{listuser.account}</td>
    //         <td>{listuser.phone}</td>
    //         <td>{listuser.date}</td>
    //         <td>{listuser.status}</td>
    //     </tr>
    //     }
    //     return results;
    //   }

    // );
    const { listuser } = this.state;
    return (
      <div>
        <div className='container-fluid' >
          <div className='row'>
            <div className='col-md-8 mt-3'>
              <div className='list'>
                <h5>Danh sách tài khoản đối tác</h5>
              </div>
            </div>

            <div className='col-md-4 mt-3'>
              <div className='btn'>
                <button type="button" className="btn"  >
                  {/* <Link to={`newuser`}> + Tạo tài khoản mới</Link> */}
                  + Tạo tài khoản mới

                </button>
              </div>
            </div>
          </div>

          <div className='container-custom' style={{ backgroundColor: "#A9A9A9 !important" }} >
            <div className='row'>
              <div className='col-md-4 mt-5'>
                <div className="input-group mb-3">
                  <button
                    className="btn3" type="button" style={{ backgroundColor: "whitesmoke", color: "black", borderRadius: "5px", border: "1px solid white" }}>
                    <IoFilterOutline />
                    Bộ lọc
                  </button>
                  <input type="text" className="form-control" placeholder="Seargh" style={{ marginLeft: 10, borderRadius: "5px" }} />
                </div>

              </div>
              <div className='col-md-4 mt-5'>

              </div>
              <div className='col-md-4 mt-5'>
                <div className='btn8'>
                  <button onClick={() => this.toggleStatus('Hoạt động')} className='active' type='button'>Hoạt động</button>
                  <button onClick={() => this.toggleStatus2('Tạm ngưng')} className='pause' type='button'>Tạm ngừng</button>
                </div>
              </div>

            </div>
          </div>

          <div className='container-custom2'>
            <div className="container-fluid mt-3">
              <table className="table">
                <thead>
                  <tr>
                    <th />
                    <th>Tên tổ chức</th>
                    <th>Đại diện pháp nhân</th>
                    <th>Tên tài khoản</th>
                    <th>Số điện thoại</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {listuser.map((index) => (
                    <tr key={index.id}>
                      <td>
                        <input type="checkbox" checked={index.isChecked} onChange={() => this.handleCheckboxChange(index.id)} />
                      </td>
                      <td>{index.names}</td>
                      <td>{index.represent}</td>
                      <td>{index.account}</td>
                      <td>{index.phone}</td>
                      <td>{index.date}</td>
                      <td id='sts1'>{index.status}</td>
                    </tr>
                  ))}
                  {/* {elements} */}
                  {/* <tr>
                  <td>
                    <input type="checkbox" class="row-checkbox" />
                  </td>
                  <td>{props.name}</td>
                  <td>{props.represent}</td>
                  <td>{props.account}</td>
                  <td>{props.phone}</td>
                  <td>{props.date}</td>
                  <td>
                    <button type="button" className="btn1" style={{backgroundColor:"#FCDAD5", color:"#FF3300"}}>
                      Hoạt động
                    </button>
                    
                  </td>
                </tr> */}
                </tbody>

              </table>


              

            </div>

          </div>

        </div>
      </div>

    );
  }
}
;


export default User;