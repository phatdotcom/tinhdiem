import React, { Component } from 'react';
import Pics3 from '../../images/pics3.png';
import Star from '../../images/star.svg';

class Cores extends Component {
	constructor (props) {
		super(props);
		this.state = {
			points: 0,
			noti: ''
		}
	}
	componentDidMount(){
	   this.handle();			
	}
	gd_thpt () {
        let { van, toan, anhvan, tohop1, tohop2, tohop3, diemtb, diemkk, diemut } = this.props.data;

	    if (toan <= 1 || van <= 1 || anhvan <= 1 || tohop1 <= 1 || tohop2 <= 1 || tohop3 <= 1) {
           this.setState({ noti: 'Tôi năm nay hơn 70 tuổi mà tôi chưa gặp một trường hợp nào mà nó như thế này cả!' });
	    } 
	    else {
	        var i = (Number(tohop1) + Number(tohop2) + Number(tohop3)) / 3;
	        var j = (Number(toan) + Number(van) + Number(anhvan) + i + Number(diemkk)) / 4;
	        var k = j * 0.7 + Number(diemtb) * 0.3 + Number(diemut);
	        var m = k['toFixed'](2);
	        var n = 5 - m;
	        var o = n['toFixed'](2);
	        this.setState({ points: m });
	        if (m < 5) {
                this.setState({ noti: 'Chia buồn cùng bạn! Bạn vừa trượt tốt nghiệp! Hãy bình tĩnh!' })
	        } else {
                this.setState({ noti: 'Chúc mừng bạn đã đỗ tốt nghiệp! Quẩy cho tưng bừng hôm nay luôn nè!' })
	        }
	    }	    
	}
	gd_tx() {
        let { van, toan, anhvan, diemtb, diemkk, diemut } = this.props.data;

	    if (toan <= 1 || van <= 1 || anhvan <= 1) {
           this.setState({ noti: 'Tôi năm nay hơn 70 tuổi mà tôi chưa gặp một trường hợp nào mà nó như thế này cả!' });
	    } else {
	        var q = ((Number(toan) + Number(van) + Number(anhvan)) / 3 + Number(diemkk) / 4) * 0.7 + Number(diemtb) * 0.3 + Number(diemut);
	        var t = q['toFixed'](2);
	        var s = 5 - t;
	        var g = s['toFixed'](2);
	        this.setState({ points: t });
	        if (t < 5) {
                this.setState({ noti: 'Chia buồn cùng bạn! Bạn vừa trượt tốt nghiệp! Hãy bình tĩnh!' })
	        } else {
                this.setState({ noti: 'Chúc mừng bạn đã đỗ tốt nghiệp! Quẩy cho tưng bừng hôm nay luôn nè!' })
	        }
	    }
	}
	handle() {
		let { hegiaoduc } = this.props.data;
		if (hegiaoduc == 0) {
			this.gd_thpt();
		}
		else {
			this.gd_tx();
		}
	}
	render () {
	   return (
		 <div className="b-XTt">
		    <div className="zZ-_b yWZQ2" style={{ backgroundImage: 'url(' + Pics3 + ')' }}></div>
		    <div className="cO-qe">
		       <div className="_pEo3 nY_qE" style={{ backgroundImage: 'url(' + Star + ')' }}></div>		    
		       <div className="LyEd2">{this.state.points} điểm</div>
		       <div className="jMF_1">
                  {this.state.noti}
		       </div>
		    </div>
		 </div>
	   )	
	}
}
export default Cores;