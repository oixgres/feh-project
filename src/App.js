import UnitMaker from "./components/UnitMaker";

function App() {
  const Unit = {
    nickname: "Silver Knight",
    name: "Seth",
    weaponType: "Sword",
    moveType: "Cavalry",
    merges: 10,
    df : 5,
    stats : {
      HP: 52,
      Atk: 55,
      Spd: 38,
      Def: 46,
      Res: 29
    },
    skills : {
      weapon: "Silverbrand",
      assist: "Swap",
      special: "Blue Flame",
      skillA: "Atk/Def Bond 3",
      skillB: "Cancel Affinity 3",
      skillC: "Atk Smoke 3",
      seal: "Atk/Def Bond 3",
    },
    rarity: 5,
    voice_actor: "Chris Smith",
    illustrator: "Fujiwara Ryo (冨士原良)"

  }

  return (
    // <UnitCanvas/>
    <div>
      {/* <TestKonva df={true}/> */}
      <UnitMaker
        name={Unit.name}
        nickname={Unit.nickname}
        df = {Unit.df}
        merges={Unit.merges}
        stats={Unit.stats}
        // skills={Object.values(Unit.skills)}
      />
    </div>
  );
}

export default App;
