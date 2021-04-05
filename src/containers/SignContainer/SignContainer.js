import React from 'react';
import { useSelector } from 'react-redux';
import SignInButton from 'components/SignButton/SignInButton';
import SignOutButton from 'components/SignButton/SignOutButton';
import SignUpButton from '../../components/SignButton/SignUpButton';
import Modal from 'components/Modal/Modal';
import StyledSignContainer from './SignContainer.styled';
import { auth, createOrGetAuthUser, handleSignOut } from 'api/firebase';
import { signInAction, signOutAction } from 'redux/modules/auth';

export default function SignContainer() {
  const isAuthed = useSelector(state => state.auth.isAuthed);
  const [isModalShow, setIsModalShow] = React.useState(false);

  const onClose = () => {
    setIsModalShow(false);
  };

  const onOpen = e => {
    e.target.textContent === '로그인'
      ? setIsModalShow({
          type: 'login',
        })
      : setIsModalShow({
          type: 'signUp',
        });
  };

  // 인증 상태 감지 이벤트
  React.useEffect(() => {
    // 이벤츠 해제 함수 참조
    const unsubscribe = auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        const userRef = await createOrGetAuthUser(currentUser);

        userRef.onSnapshot(
          snapshot => {
            signInAction({
              uid: snapshot.id,
              ...snapshot.data(),
            });
          },
          // 참고: https://firebase.google.com/docs/firestore/query-data/listen#handle_listen_errors
          error => console.error(error.message),
        );
      } else {
        signOutAction();
      }
    });
    // 클린업
    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* 버튼 */}
      <StyledSignContainer>
        {isAuthed && <SignOutButton onClick={handleSignOut} />}
        {isAuthed || (
          <>
            <SignInButton onClick={onOpen} />
            <SignUpButton onClick={onOpen} />
          </>
        )}
      </StyledSignContainer>
      {/* 모달(다이얼로그 포함) */}
      {isModalShow ? (
        <Modal modalType={isModalShow.type} onClose={onClose} />
      ) : null}
    </>
  );
}
