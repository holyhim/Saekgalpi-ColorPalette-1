import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';
import { SignForm, WaveButton, SignInPWInput } from '../Pages_styd';
import { ChangePasswordPostAPI } from '../../UserAPI';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

//패스워드 바꾸기
const ChangePassword = ({ history, match, userInfo }) => {
    const { id } = match.params;
    if (id !== String(userInfo.id)) {
        history.push('/');
    }

    const [state, dispatch] = useReducer(reducer, {
        currentPassword: '',
        changePassword: '',
        checkChangePassword: '',
    });
    const { currentPassword, changePassword, checkChangePassword } = state;

    const onClickSaveButton = (e) => {
        e.preventDefault();
        const userID = userInfo.id;
        ChangePasswordPostAPI(state, userID).then((res) => {
            if (res.status === 200) {
                alert('비밀번호가 변경되었습니다.');
                history.push('/');
            }
        });
    };

    const handleInputValue = (e) => {
        dispatch(e.target);
    };
    return (
        <main>
            <div>
                <span className='h1'> 비밀번호 변경 </span>
            </div>
            <div className='userPageWrapper SignInWrapper'>
                {/* // TODO: 시그니처 컬러 변경: 컬러피커 이용 */}
                <Form
                    name='changePassword'
                    initialValues={{ remember: true }}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <SignForm
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: '현재 비밀번호를 입력해 주세요.',
                            },
                        ]}
                        onChange={handleInputValue}
                    >
                        <SignInPWInput
                            placeholder='현재 비밀번호'
                            name='currentPassword'
                            value={currentPassword}
                        />
                    </SignForm>

                    <SignForm
                        name='changePassword'
                        rules={[
                            {
                                required: true,
                                message: '새로운 비밀번호를 입력해 주세요.',
                            },
                        ]}
                        onChange={handleInputValue}
                        hasFeedback
                        dependencies={['changePassword']}
                    >
                        <SignInPWInput
                            placeholder='새로운 비밀번호'
                            name='changePassword'
                            value={changePassword}
                        />
                    </SignForm>

                    <SignForm
                        name='checkChangePassword'
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '비밀번호 확인을 입력해 주세요.',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (
                                        !value ||
                                        getFieldValue('changePassword') ===
                                            value
                                    ) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        '두 비밀번호가 맞지 않습니다.'
                                    );
                                },
                            }),
                        ]}
                        dependencies={['changePassword']}
                        onChange={handleInputValue}
                    >
                        <SignInPWInput
                            placeholder='비밀번호 확인'
                            name='checkChangePassword'
                            value={checkChangePassword}
                        />
                    </SignForm>
                    <Form.Item>
                        <WaveButton onClick={onClickSaveButton}>
                            저장
                        </WaveButton>
                    </Form.Item>
                </Form>
            </div>
        </main>
    );
};

export default withRouter(ChangePassword);
