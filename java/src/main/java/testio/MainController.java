package testio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import testio.Users;
import testio.UsersRepository;


@Controller
@RequestMapping(path="/api/auth")
public class MainController {
    @Autowired
    private UsersRepository usersRepository;

    @PostMapping(path="/login")
    public @ResponseBody Iterable<Users> loginUsers() {
        return usersRepository.findAll();
    }

    @PostMapping(path="/register")
    public @ResponseBody String registerNewUser (@RequestParam String email
            , @RequestParam String password) {

        Users n = new Users();
        n.setEmail(email);
        n.setPassword(new BCryptPasswordEncoder().encode(password));
        usersRepository.save(n);
        return "Saved";
    }
}
