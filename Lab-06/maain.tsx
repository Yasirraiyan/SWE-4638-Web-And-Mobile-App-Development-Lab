import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function AddRecipeScreen() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [difficulty, setDifficulty] = useState("Easy");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [description, setDescription] = useState("");

  const categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const difficulties = ["Easy", "Medium", "Hard"];

  const handleAddRecipe = () => {
    console.log({
      recipeTitle,
      category,
      difficulty,
      prepTime,
      cookTime,
      servings,
      description,
    });
    Alert.alert("Recipe Added", "Check console for details.");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Add Recipe</Text>

      <Text style={styles.label}>RECIPE TITLE</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter recipe name"
        value={recipeTitle}
        onChangeText={setRecipeTitle}
      />

      {/* CATEGORY */}
      <Text style={styles.label}>CATEGORY</Text>
      <View style={styles.row}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.optionButton,
              category === cat && styles.selectedOption,
            ]}
            onPress={() => setCategory(cat)}
          >
            <Text
              style={[
                styles.optionText,
                category === cat && styles.selectedOptionText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* DIFFICULTY */}
      <Text style={styles.label}>DIFFICULTY</Text>
      <View style={styles.row}>
        {difficulties.map((diff) => (
          <TouchableOpacity
            key={diff}
            style={[
              styles.optionButton,
              difficulty === diff && styles.selectedOption,
            ]}
            onPress={() => setDifficulty(diff)}
          >
            <Text
              style={[
                styles.optionText,
                difficulty === diff && styles.selectedOptionText,
              ]}
            >
              {diff}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        <View style={styles.timeContainer}>
          <Text style={styles.label}>PREP TIME (min)</Text>
          <TextInput
            style={styles.input}
            placeholder="Minutes"
            value={prepTime}
            onChangeText={setPrepTime}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.label}>COOK TIME (min)</Text>
          <TextInput
            style={styles.input}
            placeholder="Minutes"
            value={cookTime}
            onChangeText={setCookTime}
            keyboardType="numeric"
          />
        </View>
      </View>

      <Text style={styles.label}>SERVINGS</Text>
      <TextInput
        style={styles.input}
        placeholder="Number of servings"
        value={servings}
        onChangeText={setServings}
        keyboardType="numeric"
      />

      <Text style={styles.label}>DESCRIPTION</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Brief description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleAddRecipe}>
        <Text style={styles.buttonText}>Add Recipe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#4db6ac",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  timeContainer: {
    flex: 1,
    marginRight: 10,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#4db6ac",
    borderColor: "#4db6ac",
  },
  optionText: {
    color: "#000",
  },
  selectedOptionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4db6ac",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
