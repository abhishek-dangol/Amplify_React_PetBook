import { Pets } from "./ui-components";
import "./App.css";
import { NavBar } from "./ui-components";
import { Footer } from "./ui-components";
import { AddPet } from "./ui-components";
import { useState } from "react";
import { PetDetails } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ user, signOut }) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const formOverride = {
    TextField29766922: {
      placeholder: name,
    },
    TextField29766923: {
      placeholder: age,
    },
    TextField29766924: {
      placeholder: breed,
    },
    TextField36572714: {
      placeholder: about,
    },
    TextField36572721: {
      placeholder: color,
    },
    TextField36572728: {
      placholder: image,
    },
    image: {
      src:
        updatePet == null
          ? "https://img.freepik.com/premium-vector/cute-dog-cartoon-dog-clipart-vector-illustration_160901-2890.jpg?w=2000"
          : updatePet.image,
    },
    Button36572736: {
      isDisabled: !updatePet ? true : false,
    },
    Button29766926: {
      isDisabled: updatePet ? true : false,
    },
    Icon: {
      onClick: () => {
        setShowForm(false);
      },
      style: {
        cursor: "pointer",
      },
    },
  };
  // const detailOverride = {
  //   Button36512706: {
  //     onClick: () => {
  //       setShowDetails(!showDetails);
  //     },
  //     style: {
  //       cursor: "pointer",
  //     },
  //   },
  // };
  const navbarOverrides = {
    Button: {
      onClick: signOut,
    },
    image: {
      src: user?.attributes?.profile,
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm);
      },
    },
  };
  return (
    <div className="App">
      <NavBar width={"100%"} marginBottom={50} overrides={navbarOverrides} />
      <div className="card">
        {showDetails && (
          <PetDetails
            pet={pet}
            overrides={{
              Close: {
                onClick: () => {
                  setShowDetails(false);
                },
                style: {
                  cursor: "pointer",
                },
              },
            }}
          />
        )}
        {showForm && <AddPet pet={updatePet} overrides={formOverride} />}
        <Pets
          itemsPerPage={2}
          overrideItems={({ item, index }) => ({
            overrides: {
              Breed: { color: "black" },
              Button36512706: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                },
              },
              Button36512710: {
                onClick: () => {
                  if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                },
              },
            },
          })}
        />
      </div>
      <Footer width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);
