package com.simple.simpletodoappbackend.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class AuthSecurityConfig {


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return
                http
                        .authorizeHttpRequests(
                                auth ->
                                        auth
                                                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                                                .anyRequest().authenticated()
                        )
                        .httpBasic(Customizer.withDefaults())
                        .sessionManagement(
                                session -> session.sessionCreationPolicy
                                        (SessionCreationPolicy.STATELESS))
                        .csrf(AbstractHttpConfigurer::disable) // Starting from SB 3.1.x using Lambda DSL
                        // .csrf(AbstractHttpConfigurer::disable) // Starting from SB 3.1.x using Method Reference
                        .build();
    }
}
