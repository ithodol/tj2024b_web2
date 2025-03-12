package example.day09BookPlatform.model.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    private int bid;
    private String bname;
    private String bwriter;
    private String bcontent;
    private String bpwd;
}
