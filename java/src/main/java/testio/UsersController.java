package testio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import testio.Users;
import testio.UsersRepository;


@Controller
@RequestMapping(path="/api/auth")
public class UsersController {
    @Autowired
    private UsersRepository usersRepository;


    @PostMapping(path="/login")
    public @ResponseBody Map<String, String> loginUsers(@RequestParam String email, @RequestParam String password) {

        String key = "testio1";

        Date now = new Date(System.currentTimeMillis());
        Date exp = new Date(System.currentTimeMillis()+3600000);


        String compactJws = Jwts.builder()
                .setIssuedAt(now)
                .setExpiration(exp)
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();

        HashMap<String, String> resp = new HashMap<String, String>();
        resp.put("auth", "true");
        resp.put("access_token", compactJws);

        return resp;
    }

    @PostMapping(path="/register") // Map ONLY GET Requests
    public @ResponseBody String registerNewUser (@RequestParam String email
            , @RequestParam String password) {

        Users n = new Users();
        n.setEmail(email);
        n.setPassword(new BCryptPasswordEncoder().encode(password));
        usersRepository.save(n);
        return "Saved";
    }
}
