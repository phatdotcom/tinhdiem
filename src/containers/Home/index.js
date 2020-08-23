import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Checkbox, Tooltip, Radio, Row, Col, Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Pics2 from '../../images/pics2.jpg';
import { Cores } from '../../components';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const layout_fluid = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};

class Home extends Component {
   constructor(props){
      super(props);

      this.state = {
      	 visible: false,
      	 gdtx: false,
      	 hegiaoduc: 0,
         van: 0,
         toan: 0,
         anhvan: 0,
         tohop1: 0,
         tohop2: 0,
         tohop3: 0,
         diemtb: 0,
         diemkk: 0,
         diemut: 0
      };
   }
  showModal = () => {
    this.setState({
      visible: true,
    })
  }  
  handleOk = e => {
    this.setState({
      visible: false,
    })
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    })
  };  

  handleGdtx = e => {
  	console.log(e.target.value)
  	if (e.target.value == 1) {
  	  this.setState({
  		  gdtx: true
  	  })
  	}
  	else {
  	  this.setState({
  		  gdtx:false
  	  })
  	}
  }

   render () {

	  const onFinish = values => {
	    console.log('Success:', values.toan);
	    this.setState({
	    	visible: true,
	    	hegiaoduc: values.hegiaoduc,
	    	van: values.nguvan,
	    	toan: values.toan,
	    	anhvan: values.anhvan,
	    	tohop1: values.group1,
	    	tohop2: values.group2,
	    	tohop3: values.group3,
	    	diemtb: values.diemtb,
	    	diemkk: values.diemkk,
	    	diemut: values.diemut
	    })
	  };

	  const onFinishFailed = errorInfo => {
	    console.log(false);
	  };
	   return (
	   	  <div className="_y8yc Mpn-K">


	        <Modal
	          title={null}
	          centered
	          zIndex={10000}
	          footer={null}
	          destroyOnClose={true}
	          maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.77)' }}
	          closable
	          visible={this.state.visible}  
	          onOk={() => this.handleOk()}
	          onCancel={() => this.handleCancel()}
	        >
	            <Cores data={this.state}/>
	        </Modal>


	   	      <div className="kxBMg">
	   	          <div className="kWwO6 yWZQ2" style={{ backgroundImage: 'url(' + Pics2 + ')' }}></div>
	   	          <div className="b-Qfc">Công cụ tính điểm thi tốt nghiệp THPT</div>
	   	      </div>
	   	      <div className="c-0gk">
                  <div className="jV4L_">Nhập điểm của bạn</div>
                  <div className="u2y1M">Điểm thập phân được phân cách bởi dấu "."</div>
                  <div className="tDI25">
					   <Form
					      {...layout}
					      name="basic"
					      onFinish={onFinish}
					      onFinishFailed={onFinishFailed}
					    >

				       <Form.Item 
				            name="hegiaoduc"
					        label={
					         <span>
					            Hệ Giáo Dục&nbsp;
					            <Tooltip title="Chọn hệ giáo dục của bạn">
					              <QuestionCircleOutlined />
					            </Tooltip>
					          </span>					        	
					        }
					        rules={[
					        	{ 
					        	  required: true, 
					        	  whitespace: true,
					        	  message: 'Hãy chọn Hệ Giáo Dục của bạn!' 
					        	},
		                        { 
		                          pattern: new RegExp("^[0-1]{1}$"), 
		                          message: 'Xảy ra lỗi! Vui lòng thử lại sau.' 
		                        }					        	
					        ]}

				       >
				          <Radio.Group value="0" onChange={ (e) => this.handleGdtx(e)}>
				            <Radio.Button value="0">Hệ GD THPT</Radio.Button>
				            <Radio.Button value="1">Hệ GDTX</Radio.Button>
				          </Radio.Group>
				        </Form.Item>

					      <Form.Item
					        label={
					         <span>
					            Ngữ Văn&nbsp;
					            <Tooltip title="Bạn thi tốt nghiệp môn Ngữ Văn được bao nhiêu điểm?">
					              <QuestionCircleOutlined />
					            </Tooltip>
					          </span>					        	
					        }
					        name="nguvan"
					        rules={[
					        	 { 
					        	 	 required: true, 
					        	 	 whitespace: true,
					        	 	 message: 'Hãy nhập điểm môn Ngữ Văn của bạn!' 
					        	 },
		                        { 
		                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
		                          message: 'Điểm môn Ngữ Văn của bạn không hợp lệ!' 
		                        }					        	 
					        ]}
					      >
					        <Input placeholder="Nhập điểm Ngữ Văn của bạn"/>
					      </Form.Item>

					      <Form.Item
					        label={
					         <span>
					            Toán&nbsp;
					            <Tooltip title="Bạn thi tốt nghiệp môn Toán được bao nhiêu điểm?">
					              <QuestionCircleOutlined />
					            </Tooltip>
					          </span>					        	
					        }
					        name="toan"
					        rules={[
					        	{ whitespace: true,required: true, message: 'Hãy nhập điểm môn Toán của bạn!' },
		                        { 
		                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
		                          message: 'Điểm môn Toán của bạn không hợp lệ!' 
		                        }						        	
					        ]}
					      >
					        <Input placeholder="Nhập điểm Toán của bạn"/>
					      </Form.Item>

					      <Form.Item
					        label={
					         <span>
					            Anh Văn&nbsp;
					            <Tooltip title="Bạn thi tốt nghiệp môn Anh Văn được bao nhiêu điểm?">
					              <QuestionCircleOutlined />
					            </Tooltip>
					          </span>					        	
					        }
					        name="anhvan"
					        rules={[
					        	{ whitespace: true,required: true, message: 'Hãy nhập điểm môn Anh Văn của bạn!' },
		                        { 
		                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
		                          message: 'Điểm môn Anh Văn của bạn không hợp lệ!' 
		                        }						        	
					        ]}
					      >
					        <Input placeholder="Nhập điểm Anh Văn của bạn"/>
					      </Form.Item>
                           <Fragment>
                           {
                           	  this.state.gdtx === false ?
		                          <Row gutter={24}>
							        <Col span={8}>
							          <Form.Item
		                                {...layout_fluid}
							            name="group1"
								        label={
								         <span>
								            Tổ hợp 1&nbsp;
								            <Tooltip title="Tổ hợp 1 bao gồm Vật Lý (Khối tự nhiên) hoặc Lịch Sử (Khối xã hội).">
								              <QuestionCircleOutlined />
								            </Tooltip>
								          </span>					        	
								        }					            
							            rules={[
							              {
							              	whitespace: true,
							                required: true,
							                message: 'Hãy nhập điểm môn Tổ hợp 1 của bạn!',
							              },
				                        { 
				                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
				                          message: 'Điểm môn Tổ hợp 1 của bạn không hợp lệ!' 
				                        }						              
							            ]}
							          >
							            <Input placeholder="Tổ hợp 1" />
							          </Form.Item>
							        </Col>

							        <Col span={8}>
							          <Form.Item
		                                {...layout_fluid}					          
							            name="group2"
								        label={
								         <span>
								            Tổ hợp 2&nbsp;
								            <Tooltip title="Tổ hợp 1 bao gồm Hóa Học (Khối tự nhiên) hoặc Địa Lý (Khối xã hội).">
								              <QuestionCircleOutlined />
								            </Tooltip>
								          </span>					        	
								        }
								        rules={[
							              {
							              	whitespace: true,
							                required: true,
							                message: 'Hãy nhập điểm môn Tổ hợp 2 của bạn!',
							              },
				                        { 
				                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
				                          message: 'Điểm môn Tổ hợp 2 của bạn không hợp lệ!' 
				                        }						              
							            ]}
							          >
							            <Input placeholder="Tổ hợp 2" />
							          </Form.Item>
							        </Col>

							        <Col span={8}>
							          <Form.Item
		                                {...layout_fluid}					          
							            name="group3"
								        label={
								         <span>
								            Tổ hợp 3&nbsp;
								            <Tooltip title="Tổ hợp 3 bao gồm Sinh Học (Khối tự nhiên) hoặc Giáo Dục Công Dân (Khối xã hội).">
								              <QuestionCircleOutlined />
								            </Tooltip>
								          </span>					        	
								        }
								        rules={[
							              {
							              	whitespace: true,
							                required: true,
							                message: 'Hãy nhập điểm môn Tổ hợp 3 của bạn!',
							              },
				                        { 
				                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
				                          message: 'Điểm môn Tổ hợp 3 của bạn không hợp lệ!' 
				                        }						              
							            ]}
							          >
							            <Input placeholder="Tổ hợp 3" />
							          </Form.Item>
							        </Col>					        					        
		                          </Row>
		                          :''                           	  
                           } 
                           </Fragment>

					      <Form.Item
					        label={
					         <span>
					            Điểm TB&nbsp;
					            <Tooltip title="Điểm trung bình cả năm lớp 12 của bạn?">
					              <QuestionCircleOutlined />
					            </Tooltip>
					          </span>					        	
					        }
					        name="diemtb"
					        rules={[
					        	{ whitespace: true,required: true, message: 'Hãy nhập Điểm Trung Bình của bạn!' },
		                        { 
		                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
		                          message: 'Điểm Trung Bình của bạn không hợp lệ!' 
		                        }						        	
					        ]}
					      >
					        <Input placeholder="Nhập Điểm Trung Bình của bạn"/>
					      </Form.Item>

					      <Form.Item
					        label={
					         <span>
					            Điểm KK&nbsp;
					            <Tooltip title="Điểm Khuyến Khích của bạn là điểm được cộng từ thành tích, giải thưởng tham gia các cuộc thi, hoạt động trong quá trình học.">
					              <QuestionCircleOutlined />
					            </Tooltip>
					          </span>					        	
					        }
					        name="diemkk"
					        rules={[
					        	{ whitespace: true,required: true, message: 'Hãy nhập Điểm Khuyến Khích của bạn!' },
		                        { 
		                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
		                          message: 'Điểm Khuyến Khích của bạn không hợp lệ!' 
		                        }						        	
					        ]}
					      >
					        <Input placeholder="Nhập Điểm Khuyến Khích của bạn"/>
					      </Form.Item>

					      <Form.Item
					        label={ 
					         <span>
					            Điểm ƯT&nbsp;
					            <Tooltip title="Điểm Ưu Tiên của bạn là điểm được cộng theo thuộc diện chính sách ưu đãi của từng thí sinh khác nhau.">
					              <QuestionCircleOutlined />
					            </Tooltip>
					          </span>					        	
					        }
					        name="diemut"
					        rules={[
					        	{ whitespace: true,required: true, message: 'Hãy nhập Điểm Ưu Tiên của bạn!' },
		                        { 
		                          pattern: new RegExp("^[0-9.,]{1,4}$"), 
		                          message: 'Điểm Ưu Tiên của bạn không hợp lệ!' 
		                        }						        	
					        ]}
					      >
					        <Input placeholder="Nhập Điểm Ưu Tiên của bạn"/>
					      </Form.Item>					      


					      <Form.Item {...tailLayout}>
					        <Button type="primary" htmlType="submit" className="N1vMo">
					          Tính điểm
					        </Button>
					      </Form.Item>
					    </Form>
                  </div>



	   	      </div>
	   	  </div> 
	   )
   }
}
export default Home;