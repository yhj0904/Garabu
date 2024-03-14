import React, { useState } from 'react';

// 타입스크립트를 사용하여 컴포넌트 props 정의 (필요한 경우)
interface DateInputProps {
  // 예제에서는 사용하지 않지만 확장성을 위해 정의
}

const DateInput: React.FC<DateInputProps> = (props) => {
  // 상태 정의 및 초기화
  const [selectedDate, setSelectedDate] = useState<string>("");

  // 날짜 변경 핸들러
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value); // 입력된 날짜로 상태 업데이트
  };

  return (
    <div>
      <input
        type="date" // 날짜 입력 타입 지정
        value={selectedDate} // 현재 선택된 날짜로 값 설정
        onChange={handleDateChange} // 날짜 변경 시 핸들러 호출
      />
    </div>
  );
};

export default DateInput;
