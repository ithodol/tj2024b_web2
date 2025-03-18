package web.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // 빈 등록 // 스프링이 시작될 때 해당 클래스를 읽어들인다
public class CorsConfig implements WebMvcConfigurer {
    // (1) implements WebMvcConfigurer : Spring mvc 관련 설정값을 수정하는 인터페이스
    // (2) CORS 관련 설정값 수정, 오버라이딩(재정의) / addCorsMappings 메소드

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 스프링 컨트롤러의 매핑에 대해서
                .allowedOrigins("http://localhost:5173", "http://localhost:5174") // 허용할 도메인
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 허용할 HTTP 메소드
                .allowedHeaders("*") // HTTP 헤더(body) 정보 허용
                .allowCredentials(true); // HTTP 쿠키/인증 허용 (세션)
                            // 마지막에 ;(세미콜론)으로 마침
    }
}
