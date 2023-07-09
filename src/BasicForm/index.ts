// export { default } 구문은 ./BasicForm 모듈에서
// 기본(default)으로 내보낸 항목을 현재 모듈에서 동일한 이름으로 내보냅니다.
export { default } from './BasicForm';

/*
입력란에 값을 입력해보면, 이메일만 값을 입력했는데 비밀번호란, 폼 전체가 re-render 됩니다.
사용자가 <Input type=’email’ /> 인 요소에 값을 입력하면 setFormState 를 호출하고, 아래와 같은 일이 일어납니다.

<Form />
- formState 가 업데이트됩니다. state 가 변경되었으므로 re-render 됩니다.

<Input type='email’ >
- 부모 컴포넌트인 <Form /> 이 re-render 되므로, 함께 re-render 됩니다.

<Input type=’password’ >
- 부모 컴포넌트인 <Form /> 이 re-render 되므로, 함께 re-render 됩니다.
*/
