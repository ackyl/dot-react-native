export default {
  card: {
    backgroundColor: '#ffc52b',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    fontFamily: 'Roboto',
  },

  top: {
    container: {
      flexDirection: 'row',
      marginHorizontal: 16,
      marginTop: 12,
    },
    account: {
      marginTop: 5,
      flex: 1,
    },
    box: {
      backgroundColor: 'red',
      borderRadius: 8,
    },
    status: {
      margin: 6,
    },
  },

  middle: {
    container: {
      marginHorizontal: 16,
      marginVertical: 14,
    },
    margin: {
      marginBottom: 6,
    },
  },

  bottom: {
    container: {
      flex: 1,
      paddingVertical: 22,
      marginLeft: 16,
    },
    margin: {
      marginBottom: 6,
    },
  },

  hLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(52, 52, 52, 0.4)',
  },
  vLine: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    width: 1,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
};
