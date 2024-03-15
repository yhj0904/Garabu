import React from 'react';

interface DateInputProps {
  value: string; // 상위 컴포넌트로부터 받은 현재 날짜 값
  onChange: (value: string) => void; // 날짜 변경 시 호출될 함수
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  // 날짜 변경 핸들러
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 상위 컴포넌트의 onChange 핸들러를 호출하여 변경된 날짜를 전달
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="date"
        value={value} // 상위 컴포넌트로부터 받은 value를 사용
        onChange={handleDateChange} // 날짜 변경 시 핸들러 호출
      />
    </div>
  );
};

export default DateInput;
