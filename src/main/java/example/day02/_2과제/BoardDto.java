package example.day02._2과제;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter @ToString
public class BoardDto {
    private int bno;
    private String title;
    private String content;
}
