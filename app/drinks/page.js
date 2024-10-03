import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const FetchDrinks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response =  await fetch(url);
    // throw an error

    if(!response.ok){
      throw new Error('Failed to Fetch Data');
    }
    const data = await response.json();
    return data;
}

const DrinksPage = async () => {
  const data = await FetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
