var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecipeBox = function (_React$Component) {
  _inherits(RecipeBox, _React$Component);

  function RecipeBox(props) {
    _classCallCheck(this, RecipeBox);

    var _this = _possibleConstructorReturn(this, (RecipeBox.__proto__ || Object.getPrototypeOf(RecipeBox)).call(this, props));

    _this.state = {
      recipes: [{ "name": "PIZZA", "ingredients": "Jamon", "unMount": false }, { "name": "HAMBURGUESA", "ingredients": "Carne\nEnsalada\nCebolla", "unMount": false }],
      nameField: "",
      ingredientsField: "",
      displayForm: 'none'
    };
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.eachRecipe = _this.eachRecipe.bind(_this);
    _this.removeRecipe = _this.removeRecipe.bind(_this);
    _this.updateRecipe = _this.updateRecipe.bind(_this);
    _this.showForm = _this.showForm.bind(_this);
    return _this;
  }

  _createClass(RecipeBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var recipes = JSON.parse(localStorage.getItem('_username_recipes'));
      if (recipes) {
        this.setState({ recipes: recipes });
      }
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "removeRecipe",
    value: function removeRecipe(i) {
      var recipes = this.state.recipes;
      recipes[i].unMount = true;
      this.setState({ recipes: recipes });
      localStorage.setItem('_username_recipes', JSON.stringify(recipes));
    }
  }, {
    key: "updateRecipe",
    value: function updateRecipe(newRecipe, i) {
      var recipes = this.state.recipes;
      recipes[i] = newRecipe;
      this.setState({ recipes: recipes });
      localStorage.setItem('_username_recipes', JSON.stringify(recipes));
    }
  }, {
    key: "saveRecipe",
    value: function saveRecipe(recipe) {
      var recipes = this.state.recipes;
      recipes.push(recipe);
      this.setState(recipes);
      localStorage.setItem('_username_recipes', JSON.stringify(recipes));
    }
  }, {
    key: "showForm",
    value: function showForm() {
      this.setState({ displayForm: this.state.displayForm === 'none' ? 'flex' : 'none' });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      if (this.state.nameField) {
        var recipe = { "name": this.state.nameField.toUpperCase(), "ingredients": this.state.ingredientsField, "unMount": false };
        this.saveRecipe(recipe);
        this.showForm();
        this.setState({ nameField: "", ingredientsField: "" });
        event.preventDefault();
      }
    }
  }, {
    key: "eachRecipe",
    value: function eachRecipe(recipe, i) {
      var recipeElement = React.createElement(Recipe, { key: i, index: i,
        name: recipe.name, ingredients: recipe.ingredients,
        removeRecipe: this.removeRecipe,
        updateRecipe: this.updateRecipe,
        editRecipe: this.handleInputChange
      });

      return recipe.unMount ? null : React.createElement(
        "div",
        { className: "recipe-board" },
        " ",
        recipeElement,
        " "
      );
    }
  }, {
    key: "render",
    value: function render() {
      var recipes = this.state.recipes;
      return React.createElement(
        "div",
        { className: "main" },
        React.createElement(
          "div",
          { className: "recipe-list" },
          React.createElement(
            "h1",
            { id: "main-title" },
            "Recipe Box"
          ),
          recipes.map(this.eachRecipe),
          React.createElement(
            "button",
            { type: "button", className: "btn btn-primary btn-block new-button", onClick: this.showForm },
            "Add new recipe"
          )
        ),
        React.createElement(
          "div",
          { className: "recipe-form", style: { display: this.state.displayForm } },
          React.createElement(
            "div",
            { className: "new-recipe-title" },
            " NEW RECIPE "
          ),
          React.createElement(
            "div",
            null,
            " ",
            React.createElement(
              "span",
              { className: "label" },
              " Recipe name "
            ),
            React.createElement("input", { type: "text", name: "nameField", autoComplete: "off",
              value: this.state.nameField,
              onChange: this.handleInputChange })
          ),
          React.createElement(
            "div",
            null,
            " ",
            React.createElement(
              "span",
              { className: "label" },
              " Ingredients "
            ),
            React.createElement("textarea", { type: "text", name: "ingredientsField", cols: "33", rows: "5", noResizable: true, autoComplete: "off",
              value: this.state.ingredientsField,
              onChange: this.handleInputChange })
          ),
          React.createElement(
            "div",
            null,
            React.createElement("span", { className: "\tglyphicon glyphicon-plus add-button",
              onClick: this.handleSubmit }),
            React.createElement("span", { className: "\tglyphicon glyphicon-remove close-button",
              onClick: this.showForm })
          )
        )
      );
    }
  }]);

  return RecipeBox;
}(React.Component);

var Recipe = function (_React$Component2) {
  _inherits(Recipe, _React$Component2);

  function Recipe(props) {
    _classCallCheck(this, Recipe);

    var _this2 = _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this, props));

    _this2.state = {
      name: _this2.props.name,
      ingredients: _this2.props.ingredients,
      index: _this2.props.index,
      remove: _this2.props.removeRecipe,
      update: _this2.props.updateRecipe,
      save: _this2.props.saveRecipe,
      edit: _this2.props.editRecipe,
      readonly: true
    };
    _this2.remove = _this2.remove.bind(_this2);
    _this2.edit = _this2.edit.bind(_this2);
    _this2.save = _this2.save.bind(_this2);
    return _this2;
  }

  _createClass(Recipe, [{
    key: "edit",
    value: function edit() {
      this.setState({ readonly: this.state.readonly === true ? false : true });
    }
  }, {
    key: "remove",
    value: function remove() {
      this.state.remove(this.state.index);
    }
  }, {
    key: "save",
    value: function save() {
      this.setState({ readonly: this.state.readonly === true ? false : true });
      var recipe = { name: this.state.name, ingredients: this.state.ingredients };
      this.state.update(recipe, this.state.index);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "recipe" },
        React.createElement(
          "div",
          { className: "recipe-name" },
          React.createElement("input", { type: "text", name: "nameField", className: "recipe-name-field", autoComplete: "off",
            readOnly: this.state.readonly,
            defaultValue: this.state.name
          })
        ),
        React.createElement(
          "div",
          { className: "recipe-ingredients" },
          React.createElement("textarea", { type: "text", name: "nameField", cols: "33", rows: "4", className: "recipe-ingredients-field", autoComplete: "off",
            readOnly: this.state.readonly,
            defaultValue: this.state.ingredients
          })
        ),
        React.createElement(
          "div",
          null,
          React.createElement("span", { className: "\tglyphicon glyphicon-trash remove-button", onClick: this.remove }),
          React.createElement("span", { className: "\tglyphicon glyphicon-edit edit-button", onClick: this.edit }),
          React.createElement("span", { className: "\tglyphicon glyphicon-refresh save-button", onClick: this.save,
            style: { display: this.state.readonly === true ? 'none' : 'inline-block' } })
        )
      );
    }
  }]);

  return Recipe;
}(React.Component);

React.render(React.createElement(RecipeBox, null), document.getElementById('recipe'));