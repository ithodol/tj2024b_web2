package example.day13;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class TranService {

    private final TranMapper tranMapper;

    //(1)
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


    // (2) '이체' 트랜잭션
    // @Transactional 아래 메소드의 'withdraw(출금)', 'deposit(입금)' 처리를 하나의 논리 작업 단위로 만들기
    // 기본 발동 조건 : RuntimeException
    @Transactional(rollbackFor = Exception.class) // 모든 예외 클래스에 대한 롤백이 적용됨
    public boolean transfer(Map<String, String> params) throws Exception {
        // 예외처리 방법1 : try{}catch(예외클래스명 e){}
        
        // 예외처리 방법2 : throws 예외클래스명{}
        
        // 유효성 검사 : 이체할 금액 확인, 보내는 사람/받는 사람 존재 여부 판단
        // 유효성 검사 실패시 false 가 아닌 강제 예외 발생시키기

        // 1. 보내는 사람의 금액 차감(출금)
        String fromName = params.get("fromname");
        int money = Integer.parseInt(params.get("money"));
        tranMapper.withdraw(fromName, money);


        // 2. 받는 사람의 금액 추가(입금)
        String toName = params.get("toname");
        tranMapper.deposit(toName, money);

        return true;
    }

    // (3) 매일 9시(스케줄링)에 모든 회원들에게 100원씩 입금
    // 트랜잭션, 스트림, 메소드레퍼런스 활용

    // 1. 매일 9시 스케줄링
    // @Scheduled(cron = "초 분 시 일 월 요일")
    // AppStart에서 @EnableScheduling
    // @Scheduled(cron = "0 0 9 * * *")
    @Scheduled(cron = "0 */1 * * * *") // 1분 마다(확인용)
    @Transactional(rollbackFor = Exception.class)
    public void Task() throws Exception{ // 예외처리
        // (1) 모든 회원 목록 조회 / transMapper.findAll()

        // (2) 모든 회원들에게 100원씩 입금
        tranMapper.findAll() // 모든 회원 목록 조회
                .stream() // 조회 결과 스트림 생성
                .forEach( name -> tranMapper.deposit(name, 100)); // 스트림의 각 데이터(이름)으로 입금 처리
        System.out.println("============== 모든 회원들에게 이벤트 100원 입금 처리 완료 ==============");
    }

}
