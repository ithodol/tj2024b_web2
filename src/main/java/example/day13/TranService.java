package example.day13;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TranService {

    private final TranMapper tranMapper;

    @Transactional // 해당 메소드는 트랜잭션을 적용한다는 뜻 // 발동 조건 : 'RuntimeException' 예외
    // 해당 메소드에서 처리하는 모든 SQL은 'RuntimeException' 이 발생하면 rollback(롤백)발생 => 모두 취소
    public boolean tran(){
        // (1) 첫번째 insert
        tranMapper.tran("유재석");
        // 학습용 : 고의적 문제(예외)발생시킴, 아래 insert 불가능하게끔
        if (true) {
            throw new RuntimeException("강제 실행 예외 발생"); // 예외 발생시 아래 코드 실행 X
            // (3) 만약 두개의 insert 하는 도중에 첫번째 insert 이후 문제
            // 유재석만 저장
            // --> @Transactional 이후에는 유재석도 롤백(취소)된다
        }

        // (2) 두번째 insert
        tranMapper.tran("강호동");

        return true;
    }

}
