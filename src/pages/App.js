import { useState } from "react";
import gitlogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { api } from "../services/api";
import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return
      }
    }
    alert("Repositório não encontrado");
  };
  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter((repo) => repo.id !== id);
    setRepos(newRepos);
  };

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="logo da github" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          repo={repo}
          handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  );
}

export default App;
