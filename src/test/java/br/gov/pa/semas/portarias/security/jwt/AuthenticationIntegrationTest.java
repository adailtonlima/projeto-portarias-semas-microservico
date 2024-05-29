package br.gov.pa.semas.portarias.security.jwt;

import br.gov.pa.semas.portarias.config.SecurityConfiguration;
import br.gov.pa.semas.portarias.config.SecurityJwtConfiguration;
import br.gov.pa.semas.portarias.config.WebConfigurer;
import br.gov.pa.semas.portarias.management.SecurityMetersService;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import tech.jhipster.config.JHipsterProperties;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = {
        JHipsterProperties.class,
        WebConfigurer.class,
        SecurityConfiguration.class,
        SecurityJwtConfiguration.class,
        SecurityMetersService.class,
        JwtAuthenticationTestUtils.class,
    }
)
public @interface AuthenticationIntegrationTest {
}
