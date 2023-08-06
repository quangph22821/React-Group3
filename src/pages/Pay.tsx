

const PayPage = () => {
    if (typeof (Storage) !== "undefined") {

        var data = localStorage.getItem("64b812af46a17bbda21dbbcb");

        alert(data);

    } else {

        alert('LocalStorage không hỗ trợ trên trình duyệt này!!');
       
       }
    return <>
        <h2 className="text-center mt-3">Xác nhận thanh toán đơn hàng</h2>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                disabled
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Example textarea
            </label>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
                disabled
            />
        </div>
        <button type="submit" className="btn btn-success">Xác nhận thanh toán</button>
    </>

}

export default PayPage
