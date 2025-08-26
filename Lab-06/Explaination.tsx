import React, { useState } from "react";
কী: React লাইব্রেরি এবং useState হুক ইমপোর্ট করছে।

কেন: React দিয়ে UI বানাতে এবং useState ব্যবহার করে component এর state পরিচালনা করতে।

ফলাফল: আমরা component তৈরি করতে পারি এবং state ব্যবহার করতে পারি।

javascript
Copy
Edit
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
কী: React Native এর UI components ইমপোর্ট করা হচ্ছে।

কেন: UI বানানোর জন্য।

View → container, div এর মতো

Text → লেখা দেখাতে

TextInput → ইউজার ইনপুট নেওয়ার জন্য

ScrollView → স্ক্রল করার জন্য

StyleSheet → স্টাইল সংজ্ঞা করার জন্য

TouchableOpacity → button বা tap-able element

Alert → popup message দেখানোর জন্য

ফলাফল: আমরা এগুলো ব্যবহার করে সুন্দর UI বানাতে পারব।

javascript
Copy
Edit
export default function AddRecipeScreen() {
কী: একটি ফাংশনাল কম্পোনেন্ট তৈরি।

কেন: React Native এ component বানানোর সহজ উপায়।

ফলাফল: এই ফাংশন আমাদের AddRecipeScreen UI রেন্ডার করবে।

javascript
Copy
Edit
  const [recipeTitle, setRecipeTitle] = useState("");
কী: একটি state variable তৈরি recipeTitle নামে।

কেন: ইউজার যেটা recipe title input করবে তা রাখার জন্য।

ফলাফল: শুরুতে empty string; setRecipeTitle দিয়ে আপডেট করা যাবে।

javascript
Copy
Edit
  const [category, setCategory] = useState("Breakfast");
  const [difficulty, setDifficulty] = useState("Easy");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [description, setDescription] = useState("");
কী: অন্য state variables তৈরি করা।

কেন: সব ইনপুট field এবং option select এর জন্য state রাখার জন্য।

ফলাফল: প্রথমে default বা empty value থাকবে, ইউজার ইনপুটের সাথে পরিবর্তিত হবে।

javascript
Copy
Edit
  const categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const difficulties = ["Easy", "Medium", "Hard"];
কী: দুটি array declare।

কেন: option buttons বানানোর জন্য।

ফলাফল: map দিয়ে সহজে button তৈরি করা যাবে।

javascript
Copy
Edit
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
কী: একটি ফাংশন যা button press এ চালানো হবে।

কেন: ইনপুটগুলো console এ দেখতে এবং alert দেখাতে।

ফলাফল: ইউজারের data console এ print হবে এবং popup আসবে।

javascript
Copy
Edit
  return (
    <ScrollView style={styles.container}>
কী: UI রেন্ডার শুরু হচ্ছে। ScrollView দিয়ে সব content স্ক্রল করা যাবে।

কেন: content যদি screen overflow করে, scroll করতে।

ফলাফল: পুরো form স্ক্রল করতে পারবে।

javascript
Copy
Edit
      <Text style={styles.heading}>Add Recipe</Text>
কী: screen heading।

কেন: UI সুন্দর করার জন্য।

ফলাফল: বড় font এ “Add Recipe” লেখা দেখাবে।

javascript
Copy
Edit
      <Text style={styles.label}>RECIPE TITLE</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter recipe name"
        value={recipeTitle}
        onChangeText={setRecipeTitle}
      />
কী: recipe title input field।

কেন: ইউজার recipe name লিখতে পারে।

ফলাফল: typed text recipeTitle state এ save হবে।

javascript
Copy
Edit
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
কী: category select buttons।

কেন: ইউজার একটি category select করবে।

ফলাফল: যেটা selected, তার style change হবে, এবং category state আপডেট হবে।

javascript
Copy
Edit
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
কী: difficulty select buttons।

কেন: ইউজার recipe difficulty choose করতে পারে।

ফলাফল: selected difficulty এর color change হবে, state update হবে।

javascript
Copy
Edit
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
কী: prep time input।

কেন: ইউজার preparation time numeric ভাবে দিতে পারে।

ফলাফল: prepTime state update হবে।

javascript
Copy
Edit
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
কী: cook time input।

কেন: cooking time numeric দিতে।

ফলাফল: cookTime state update হবে।

javascript
Copy
Edit
      <Text style={styles.label}>SERVINGS</Text>
      <TextInput
        style={styles.input}
        placeholder="Number of servings"
        value={servings}
        onChangeText={setServings}
        keyboardType="numeric"
      />
কী: servings input।

কেন: recipe servings save করার জন্য।

ফলাফল: servings state update হবে।

javascript
Copy
Edit
      <Text style={styles.label}>DESCRIPTION</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Brief description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
কী: recipe description input।

কেন: ইউজার detailed info দিতে পারবে।

ফলাফল: description state update হবে, multiple lines input হবে।

javascript
Copy
Edit
      <TouchableOpacity style={styles.button} onPress={handleAddRecipe}>
        <Text style={styles.buttonText}>Add Recipe</Text>
      </TouchableOpacity>
কী: add recipe button।

কেন: form submit করতে।

ফলাফল: handleAddRecipe function execute হবে, console এ data এবং Alert show হবে।

javascript
Copy
Edit
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
কী: ScrollView এর container style।

কেন: padding এবং background color set করতে।

ফলাফল: পুরো screen clean এবং padding সহ দেখাবে।

javascript
Copy
Edit
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#4db6ac",
  },
কী: screen heading style।

কেন: heading দেখতে বড় এবং সুন্দর করতে।

ফলাফল: "Add Recipe" বড়, bold, centered এবং color সহ দেখাবে।

javascript
Copy
Edit
  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },
কী: label style।

কেন: input label গুলো readable এবং spacing ঠিক রাখতে।

javascript
Copy
Edit
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
কী: TextInput style।

কেন: rounded border, padding এবং spacing দেওয়ার জন্য।

javascript
Copy
Edit
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
কী: row layout style।

কেন: multiple buttons/inputs row-wise show করার জন্য।

javascript
Copy
Edit
  timeContainer: {
    flex: 1,
    marginRight: 10,
  },
কী: prep/cook time container style।

কেন: 2 input side-by-side properly দেখানোর জন্য।

javascript
Copy
Edit
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
কী: option buttons এবং selected option style।

কেন: user-friendly selection দেখানোর জন্য।

javascript
Copy
Edit
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
কী: submit button style।

কেন: clickable এবং visually appealing button বানানোর জন্য।

💡 সারসংক্ষেপ:

useState দিয়ে সব input/state track করা হচ্ছে।

TouchableOpacity দিয়ে category/difficulty select করা হচ্ছে।

ScrollView দিয়ে সব input স্ক্রলযোগ্য করা হয়েছে।

Add Recipe button press করলে console log এবং Alert দেখাবে।

সব style UI সুন্দর এবং readable রাখার জন্য।

