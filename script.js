$(document).ready(function () {
    // Function to fetch Pokemons by color
    //    script.js

    function fetchPokemonsByColor(color, limit) {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon-color/${color}/`,
            type: 'GET',
            data: { limit: limit },
            success: function (response) {
                // Prepare data for Handlebars
                const pokemons = response.pokemon_species.map(function (pokemon) {
                    return {
                        name: pokemon.name,
                        url: `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`

                    };
                });

                // Slice the array to limit the number of Pokemon
                const limitedPokemons = pokemons.slice(0, limit);
                console.log(pokemons)
                console.log(limitedPokemons)
                // Compile Handlebars template
                var source = $("#pokemonTemplate").html();
                var template = Handlebars.compile(source);
                var html = template({ pokemons: limitedPokemons });

                // Display results on the page
                $("#cards").append(html);

                // Create the table
                createTable(limitedPokemons);
            },
            error: function (error) {
                console.log('Error fetching data:', error);
            }
        });
    }

    // Function to create a table
    function createTable(pokemons) {
        var table = $('<table>').addClass('table');
        var thead = $('<thead>').appendTo(table);
        var tbody = $('<tbody>').appendTo(table);
        var trHead = $('<tr>').appendTo(thead);
        $('<th>').text('Redni broj').appendTo(trHead);
        $('<th>').text('Naziv').appendTo(trHead);

        // Populate table rows with pokemon data
        pokemons.forEach(function (pokemon, index) {
            // Check if the Pokemon name starts with 'P'

            var tr = $('<tr>').appendTo(tbody);
            $('<td>').text(index).appendTo(tr);
            $('<td>').append($('<a>').attr('href', pokemon.url).text(pokemon.name)).appendTo(tr);

        });
        // Apply zebra striping to the table rows
        tbody.children('tr:even').addClass('even-row'); // Apply class to even rows

        // Append the table to the body
        $('#table-container').append(table);
        letter = "p"
        iDontWantP(pokemons, letter)
        
    }

    // Fetch 20 yellow Pokemons
    fetchPokemonsByColor('blue', 30);
});

function iDontWantP(pokemons,letter){
    
    let okemons = pokemons.filter(pokemon => pokemon.name.charAt(0) != letter)
    console.log(okemons)
    setTimeout(() => {
        var table= $('.table')
        table.empty()
        console.log($('#table-container'))
        var thead = $('<thead>').appendTo(table);
        var tbody = $('<tbody>').appendTo(table);
        var trHead = $('<tr>').appendTo(thead);
        $('<th>').text('Redni broj').appendTo(trHead);
        $('<th>').text('Naziv').appendTo(trHead);
        okemons.forEach(function (pokemon, index) {
            
                // Add row for non-'P' Pokemon
                var tr = $('<tr>').appendTo(tbody);
                $('<td>').text(index).appendTo(tr);
                $('<td>').append($('<a>').attr('href', pokemon.url).text(pokemon.name)).appendTo(tr);
            
        });

        // Apply zebra striping to the table rows
        tbody.children('tr:even').addClass('even-row'); // Apply class to even rows

        // Append the table to the body
        $('#table-container').append(table);

        var removedPokemonsCount = pokemons.length - okemons.length
        // Create and append a div to display the count of removed pokemons
        var removedPokemonDiv = $('<div>').text('Removed Pokemons: ' + removedPokemonsCount);
        $('#table-container').append(removedPokemonDiv);
    }, 2000);
}