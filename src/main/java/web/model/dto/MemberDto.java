package web.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data // @Getter, @Setter, @ToString 등 포함되어 있는 어노테이션
@AllArgsConstructor // 전체 생성자
@NoArgsConstructor // 빈 생성자
@Builder // 빌터패턴 지원
public class MemberDto {
    // DB 기본
    private int mno;
    private String mid;
    private String mpwd;
    private String mname;
    private String mimg; // [DB]업로드된 파일의 파일명

    // 그 외
    private MultipartFile uploadfile; // [form 전송]등록시 업로드된 파일의 바이트 인터페이스
    // private List<MultipartFile> uploadfiles; // 여러개 업로드된 파일
}
