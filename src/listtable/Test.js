import React, { useState } from 'react';
import Modal from 'react-modal';

// Khởi tạo Modal
Modal.setAppElement('#root');

function MyComponent() {
  const [rows, setRows] = useState([
    { id: 1, isChecked: false },
    { id: 2, isChecked: false },
    { id: 3, isChecked: false },
    // Thêm các hàng khác nếu cần
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleActivate = () => {
    const updatedRows = rows.map(row => ({
      ...row,
      isChecked: true,
    }));
    setRows(updatedRows);
  };

  const handlePause = () => {
    setIsModalOpen(true);
    const selectedRows = rows.filter(row => row.isChecked);
    setSelectedRows(selectedRows);
  };

  const handleConfirmPause = () => {
    const updatedRows = rows.map(row => ({
      ...row,
      isChecked: false,
    }));
    setRows(updatedRows);
    setIsModalOpen(false);
  };

  const handleCancelPause = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (id) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, isChecked: !row.isChecked };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Checkbox</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="checkbox"
                  checked={row.isChecked}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleActivate}>Kích hoạt</button>
      <button onClick={handlePause}>Tạm ngừng</button>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div>
          <p>{`Bạn có chắc chắn muốn tạm ngừng số ${selectedRows.map(row => row.id).join(', ')}?`}</p>
          <button onClick={handleConfirmPause}>Xác nhận</button>
          <button onClick={handleCancelPause}>Hủy</button>
        </div>
      </Modal>
    </div>
  );
}

export default MyComponent;
