function fecha() {
    $( "#campofecha" ).datepicker({
      format:"yyy/mm/dd",
      startDate: '-3d',
      language:"es",
      numberOfMonths: 1,
      showButtonPanel: true
    });
  }