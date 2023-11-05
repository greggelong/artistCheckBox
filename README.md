## an artist selection app

the artists will be selected based on criteria such as Artist Practice  medium technique  themes
social commentary etc

as the animals are chosen on the basis of habitat and color and number of legs

the createList( ) function 
This code checks if any of the selected properties match with the artist, and if so, the artist is included in the matchingArtists array. This allows for artists to match with any selected property rather than all selected properties.

This is the all array branch

the createList2() function 

This code will only include artists in the matchingArtists array if they match all the selected properties.


the createList3() function 

This function will only return artists who match all the selected properties, regardless of whether other properties are selected as well.



Sure, here's the updated list:

1. **Inclusive Matching:** Any selected property allows for inclusion.
2. **Strict Matching:** All selected properties must match.
3. **Partial Matching with Optional Properties:** All selected properties must match, but other properties can be present without affecting the match.


after a lot of work I found that some of the objects in the data objects the key value pairs have values that are strings not arrays 

and this causes some problems when handling the searching logic

I messed it up but reverted back.  If I am going to write a big code thing like this I need to start using branches

See some notes in the code

inclusive matching and strict matching are working but partial matching is not working


You want to ensure that an artist is only pushed to the list if they have at least one selected quality from each category and no qualities from other artists. 